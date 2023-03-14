import Article from "./Article"

const ArticleList= ({posts}) => {
    console.log(posts)
    const articles = posts.map((post) => (
        <Article key={post.id} {...post} />
    ))
    return (
        <main>
            {articles}
        </main>
    )
}

export default ArticleList;

// import React from "react";
// import Article from "./Article"

// const ArticleList= ({posts}) => {
//     console.log(posts)
//     const articles = posts.map((post) => {
//         return (
//          <Article 
//              key={post.id} 
//              id={post.id}
//              title={post.title}
//              minutes={post.minutes}
//              preview={post.preview} 
//              />
//     )})
//     return (
//         <main>
//             {articles}
//         </main>
//     )
// }

// export default ArticleList;