import React from "react";
import { Post } from "./Post";

export function PostsList() {
  const posts = [
    {
      title: "Como promover a modernização hospitalar de maneira simplificada?",
      description:
        "Quer promover a modernização hospitalar na sua instituição? Veja dicas de como implementar novas tecnologias e as melhores automações!"
    },
    {
      title: "Data drift em IA para saúde: o que vem depois do deploy?",
      description:
        "Você faz o deploy do seu produto, começa a receber dados reais e descobre que seu modelo não generaliza bem. Veja dicas de como monitorar e tratar esse problema."
    },
    {
      title: "Devo escrever testes unitários para aplicações de IA?",
      description:
        "Descubra como trazer mais qualidade em seus produtos de IA. Comece a aplicar boas práticas de engenharia de software em suas aplicações de IA."
    }
  ];

  return (
    <section>
      {posts.map((post) => (
        <Post postTitle={post.title} description={post.description} />
      ))}
    </section>
  );
}
