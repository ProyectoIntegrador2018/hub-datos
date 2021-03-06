import React, { useState, useEffect } from "react";
import "./App.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import NewsBanner from "./components/NewsBanner";
import Row from "react-bootstrap/Row";

function NewsDetails() {
  const [description, setDescription] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      /* code needed later to fetch data needed for the page */

      let descriptionParagraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod lacus at est cursus egestas. Vestibulum blandit, orci a bibendum dignissim, massa justo scelerisque massa, non consectetur velit urna vitae urna. Sed purus lacus, eleifend id pharetra dictum, aliquet faucibus lectus. Proin at nisl eleifend, aliquam diam ac, tempor odio. Mauris laoreet nulla non imperdiet volutpat. Sed sit amet odio a odio commodo sagittis quis a nisl. Duis ornare eu orci id placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean arcu ex, sagittis et pulvinar et, gravida eget lectus. Aliquam elementum, nisl sit amet dignissim lobortis, quam lorem bibendum mi, quis lobortis nulla elit ac nibh. Aenean id tellus hendrerit, lobortis urna vitae, lacinia est. Curabitur in rhoncus urna, quis commodo tortor. In ultrices mauris at suscipit pharetra.
Donec consequat consequat est, eget fermentum eros dictum non. Cras mauris dolor, auctor vel facilisis vel, egestas sed augue. Praesent purus nulla, semper eget tristique sed, mattis ullamcorper odio. Phasellus dui risus, bibendum ut lacus non, viverra lacinia lectus. Nam dictum lacus massa, quis malesuada arcu pharetra ut. Nunc sit amet magna dui. Quisque pretium fermentum justo. Nunc sagittis mauris ut felis scelerisque mattis. Nullam nisl tellus, luctus quis dui eget, sollicitudin pharetra orci. Proin dapibus, lectus sed scelerisque ultricies, ex elit ultricies arcu, at placerat lectus lorem sed mi. Morbi sodales cursus luctus. Proin condimentum pellentesque erat, at bibendum risus posuere scelerisque. Aliquam nec magna sed urna varius pellentesque. Donec eget ipsum eget tellus vehicula lacinia.
Phasellus et purus commodo, molestie massa aliquam, mattis est. Nam ultrices, risus quis mollis fermentum, neque enim aliquam turpis, sed lobortis nibh nulla sed erat. Fusce purus ipsum, interdum sed mauris et, blandit dapibus erat. Donec venenatis, mauris vel bibendum euismod, eros dolor semper tortor, non rutrum magna ipsum a leo. Etiam dignissim nulla ut lacus dignissim sagittis. Nullam quis convallis magna, nec rhoncus lorem. Etiam laoreet, tortor quis euismod ultricies, est mauris eleifend lorem, a eleifend ligula eros ut est. Proin pretium tempus ligula, sit amet convallis neque pellentesque eget. Duis dolor nibh, faucibus id egestas ornare, aliquet ut enim. Phasellus gravida est a efficitur congue. Vivamus at facilisis ex. Maecenas accumsan dignissim pharetra.
Proin id lorem et quam aliquet interdum. Vivamus vitae ultricies risus, sit amet vestibulum quam. Aenean consectetur nunc sed ullamcorper mollis. Mauris in suscipit eros, id sagittis ex. Donec et egestas nisi, porta eleifend massa. Mauris eleifend sollicitudin quam id tempor. Sed ut consectetur nibh. Donec sit amet viverra dolor. Vestibulum pulvinar, tellus at luctus molestie, neque tortor consectetur neque, eu varius urna sapien at libero. Suspendisse id sapien elementum, dictum tellus dictum, consectetur diam. Vestibulum vitae lectus lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
Vivamus eget sem blandit, varius diam a, consectetur enim. Duis scelerisque quis massa vitae ullamcorper. Proin et tempus tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis rhoncus sodales. Integer tempor erat vitae massa placerat efficitur. Quisque mollis dignissim velit tempor ullamcorper.
`;

      let paragraphs = descriptionParagraphs.split("\n");
      setDescription(paragraphs.filter((section) => section !== ""));
    };

    fetchProject();
  }, []);

  return (
    <div className="pb-5">
      <NewsBanner
        author={"Autor de la noticia"}
        title={"Título de la noticia"}
        date={"07/10/2020"}
        imgUrl={"https://picsum.photos/2000/400"}
      />
      <Container fluid className="pb-3" style={{ width: "90%" }}>
        <Row className="justify-content-center">
          <Col xs={10} className="card-shadow rounded mb-3 p-5">
            {description
              ? description.map((paragraph, i) => (
                  <p key={`paragraph_${i}`}>{paragraph}</p>
                ))
              : ""}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NewsDetails;
