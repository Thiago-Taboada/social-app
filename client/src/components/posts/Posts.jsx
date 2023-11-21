import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Posts = ({userId}) => {
  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("/posts?userId="+userId).then((res) => {
      return res.data;
    })
  );
  //          TA DANDO ERRO COM ALGUNS USUARIOS, DUPLICA OS POSTS DO USUARIO LOGADO. PROCURARA O ERRO, SOLUCAO TEMPORARIA APLICADA.
  // return ( 
  //   <div className="posts">
  //     {error
  //       ? "Algo deu errado!"
  //       : isLoading
  //       ? "carregando"
  //       : data.map((post) => <Post post={post} key={post.id} />)}
  //   </div>
  // );

  return (
  <div className="posts">
    {error
      ? "Algo deu errado!"
      : isLoading
      ? "carregando"
      : data.reduce((uniquePosts, post) => {
          const isDuplicate = uniquePosts.some((uniquePost) => uniquePost.id === post.id);
          if (!isDuplicate) {
            uniquePosts.push(post);
          }

          return uniquePosts;
        }, []).map((uniquePost) => (
          <Post post={uniquePost} key={uniquePost.id} />
        ))
    }
  </div>
);
};

export default Posts;
