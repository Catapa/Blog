package blog.server.Articles;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface ArticlesRepository extends JpaRepository<Article, Long>, JpaSpecificationExecutor<Article> {
    
}
