import React from "react";
import Header from "./Header";
const MainPage = () => {
  return (
    <>
      {" "}
      <Header />
      <div className="containerInMain">
        {" "}
        <h2 className="col-sm headerMain">
          Find The Place Your looking To Travel
        </h2>
        <div className="searchInMain">
          <div className="searchInputInMain">
            {" "}
            <label htmlFor="searchMain">Search for Place</label>
            <input type="text" id="searchMain" className="form-control me-2" />
          </div>
          <label htmlFor="longitude">Search By longitude </label>
          <input type="number" id="longitude" />{" "}
          <label htmlFor="latitude">Search By latitude </label>
          <input type="number" id="latitude" />
        </div>
        <p className="main-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          enim repellat facilis iste itaque dolorum molestiae suscipit
          blanditiis, sapiente velit nisi maiores corporis doloribus, tempore
          rerum perferendis voluptas eius accusamus. Explicabo, laboriosam,
          magnam perferendis aliquam accusantium itaque nemo dicta error
          nostrum, repellat incidunt at veniam consectetur exercitationem in
          facilis corporis nobis sapiente repellendus voluptatum optio.
          Perferendis, recusandae cupiditate. Praesentium, totam! Doloremque
          adipisci consequuntur aliquid reprehenderit explicabo dolore! Modi
          dicta dolorem repudiandae eos vero veniam. Enim porro ipsa accusamus
          praesentium illum doloremque alias sunt nesciunt, ea consequuntur
          exercitationem! Recusandae, soluta. Reiciendis! Saepe dolores id
          deleniti nihil reiciendis iusto dolorem exercitationem qui sunt
          suscipit dolor, voluptatum eligendi molestiae facere magnam. Hic
          tempore voluptate earum possimus iusto quisquam sit architecto eos!
          Amet, natus! Quos suscipit dolores totam beatae aliquam! Magni sed
          minima sint facilis at illum labore accusantium veniam. Aperiam
          inventore reiciendis obcaecati culpa facilis sed esse tempore,
          quibusdam molestiae dolorum! Rerum, odio! Quisquam, saepe iure dolore
          dolor ducimus totam dolores nemo laborum deserunt cumque cum odit,
          quibusdam ratione iusto rerum aut. Laudantium distinctio quis
          corporis, amet recusandae consequuntur tempora magni modi optio.
          Blanditiis illum excepturi maiores tempora aliquid, ullam delectus
          rerum, necessitatibus itaque iusto libero, ex nam nemo. Enim veniam
          facilis et laudantium eveniet, minima a cumque incidunt atque
          molestiae cum quam. Placeat, est quos recusandae eum molestias soluta,
          aliquam sunt natus pariatur similique nisi! Ipsum laborum mollitia
          facilis quasi sit? Quisquam, minus minima tempore rem beatae ullam.
          Dolorem blanditiis esse delectus. Alias odio facilis, consectetur nisi
          iste optio fugiat atque doloribus itaque, quos facere? Voluptatibus
          dolor delectus aspernatur consequuntur, porro eaque incidunt quod
          dolores quidem, necessitatibus autem? Rerum excepturi rem similique.
          Harum, debitis. Fugiat aliquid fuga nihil accusantium voluptatibus
          vero, consectetur laudantium temporibus exercitationem blanditiis
          debitis repellendus consequatur quasi dolor cupiditate saepe provident
          dolores? Tempore eaque architecto quibusdam vitae autem beatae!
        </p>
      </div>
    </>
  );
};

export default MainPage;
