package blog.server.Articles.Likes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import blog.server.utils.ApiResponseBody;
import blog.server.utils.Const;

@Controller
@RequestMapping(Const.ARTICLES_BASE_URL)
public class ArticleLikesController {
    @Autowired
    private ArticleLikesService articleLikesService;

    @GetMapping("/likes")
    public ResponseEntity<String> getLikes() {
        List<ArticleLikes> likes = this.articleLikesService.getAll();
        
        String responseBody = new ApiResponseBody().data(likes).json();

        return ResponseEntity
            .ok()
            .contentType(MediaType.APPLICATION_JSON)
            .body(responseBody);
    }

    @PostMapping("/{articleId}/like")
    public ResponseEntity<String> likeArticle(@PathVariable Long articleId) throws Exception {
        ArticleLikes newEntry = articleLikesService.add(articleId);

        String responseBody = new ApiResponseBody()
            .data(newEntry)
            .message("Article liked")
            .json();

        return ResponseEntity
            .ok()
            .contentType(MediaType.APPLICATION_JSON)
            .body(responseBody);
    }

    @DeleteMapping("/{articleId}/like")
    public ResponseEntity<String> removeLike(@PathVariable Long articleId) throws Exception {
        ArticleLikes deletedEntry = articleLikesService.delete(articleId);

        String responseBody = new ApiResponseBody()
            .data(deletedEntry)
            .message("Removed liked")
            .json();

        return ResponseEntity
            .ok()
            .contentType(MediaType.APPLICATION_JSON)
            .body(responseBody);
    }
}
