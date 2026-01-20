// Show More functionality for newsroom page (same as blog)
document.addEventListener('DOMContentLoaded', function() {
    let articlesShown = 0;
    const showMoreBtn = document.getElementById('showMoreBtn');
    
    function showMoreArticles() {
        const articles = document.querySelectorAll('.article-container');
        let newlyShown = 0;
        
        console.log('Total articles:', articles.length);
        console.log('Articles already shown:', articlesShown);
        
        // Show next 6 articles with fade-in animation
        for (let i = articlesShown; i < articles.length && newlyShown < 6; i++) {
            if (articles[i].style.display === 'none') {
                articles[i].style.display = 'block';
                
                // Add fade-in animation with staggered delay
                setTimeout(() => {
                    articles[i].classList.add('fade-in');
                }, newlyShown * 100); // Stagger by 100ms
                
                newlyShown++;
                articlesShown++;
                console.log('Showing article:', i, articles[i]);
            }
        }
        
        console.log('Newly shown:', newlyShown);
        console.log('Total now shown:', articlesShown);
        
        // Hide button if all articles are now shown
        if (articlesShown >= articles.length) {
            showMoreBtn.style.display = 'none';
            console.log('All articles shown, hiding button');
        }
    }
    
    if (showMoreBtn) {
        console.log('Show More button found, setting up functionality');
        
        // Show first 6 articles on page load
        showMoreArticles();
        
        // Bind click event for subsequent loads
        showMoreBtn.addEventListener('click', function() {
            console.log('Show More button clicked');
            showMoreArticles();
        });
    } else {
        console.log('Show More button not found');
    }
});