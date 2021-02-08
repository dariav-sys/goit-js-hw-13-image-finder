import imgTemplate from "../templates/image-template.hbs";

import refs from "./refs";

export default function markup(data) {
  // console.log(data.hits);

  return refs.gallery.insertAdjacentHTML(
    "beforeend",
    data.hits.map((image) => imgTemplate(image)).join("")
  );
}
