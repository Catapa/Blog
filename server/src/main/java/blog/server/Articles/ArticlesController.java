package blog.server.Articles;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import blog.server.utils.ApiResponseBody;
import blog.server.utils.Const;

@RestController
@RequestMapping(Const.ARTICLES_BASE_URL)
public class ArticlesController {

	@Autowired
	private ArticlesService articlesService;
	
	@GetMapping("")
	public ResponseEntity<String> getAll(
		@RequestParam(value="page", required = false, defaultValue = Const.DEFAULT_PAGE_NUMBER) Integer page,
		@RequestParam(value="size", required = false, defaultValue = Const.DEFAULT_PAGE_SIZE) Integer size,
		@RequestParam(value="category", required = false) String category,
		@RequestParam(value="keywords", required = false) List<String> keywords,
		@RequestParam(value="authorId", required = false) Long authorId) {

		ArticleFilter filters = new ArticleFilter()
			.category(category)
			.keywords(keywords)
			.authorId(authorId);
		
		PageRequest pageRequest = PageRequest.of(page, size);

		Page<Article> articles = articlesService.getAll(filters, pageRequest);
		String responseBody = new ApiResponseBody().data(articles).json();
		return ResponseEntity
			.ok()
			.contentType(MediaType.APPLICATION_JSON)
			.body(responseBody);
	}

	@GetMapping("/{id}")
	public ResponseEntity<String> get(@PathVariable long id) throws Exception {
		Article article = articlesService.get(id);
		String responseBody = new ApiResponseBody().data(article).json();
		return ResponseEntity
			.ok()
			.contentType(MediaType.APPLICATION_JSON)
			.body(responseBody);
	}

	@PostMapping("")
	public ResponseEntity<String> add(@RequestBody Article article) throws Exception {
		Article addedArticle = articlesService.add(article);

		String responseBody = new ApiResponseBody().data(article).json();

		URI articleURI = ServletUriComponentsBuilder
			.fromCurrentRequest()
			.path("/{id}")
			.buildAndExpand(addedArticle.getId())
			.toUri();

		return ResponseEntity
			.created(articleURI)
			.contentType(MediaType.APPLICATION_JSON)
			.body(responseBody);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<String> delete(@PathVariable long id) throws Exception {
		Article deleteResponse = articlesService.delete(id);
		String responseBody = new ApiResponseBody()
			.data(deleteResponse)
			.message("Article deleted")
			.json();
		
		return ResponseEntity
			.ok()
			.contentType(MediaType.APPLICATION_JSON)
			.body(responseBody);
		
	}

	@PutMapping("")
	public ResponseEntity<String> update(@RequestBody Article updateRequest) throws Exception {
		Article updatedArticle = articlesService.update(updateRequest);
		String responseBody = new ApiResponseBody()
			.data(updatedArticle)
			.message("Article updated")
			.json();

		return ResponseEntity
			.ok()
			.contentType(MediaType.APPLICATION_JSON)
			.body(responseBody);
	}
}
