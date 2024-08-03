import { CardGrid, HeroCarousel, SidePanel } from "./components";
import { CategoryTag } from "./components/common";


export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <article className="page-content">
        <CardGrid />

        <SidePanel>
          {/* Popular Topics */}
          <div className="sticky top-10">
            <h3 className="text-base font-medium mb-4">Popular Topics:</h3>
            <div className="flex flex-wrap gap-2">
              <CategoryTag>Lifestyle</CategoryTag>
              <CategoryTag>Travel</CategoryTag>
              <CategoryTag>Technology</CategoryTag>
              <CategoryTag>Education</CategoryTag>
              <CategoryTag>Recipe</CategoryTag>
              <CategoryTag>Design</CategoryTag>
            </div>
          </div>
        </SidePanel>

      </article>
      
      
    </main>
  );
}
