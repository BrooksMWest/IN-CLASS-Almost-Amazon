import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
// this page may need some serious reformatting especially the card to better fit author info.
const viewAuthor = (item) => {
  clearDom();

  let domString = `

  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${item.email}</h6>
      <hr>
      <i class="btn btn-success fas fa-eye" id="view-author-btn--${item.firebaseKey}">View</i>
      <i class="fas fa-edit btn btn-info" id="update-author--${item.firebaseKey}">Edit</i>
      <i class="btn btn-danger fas fa-trash-alt" id="delete-author-btn--${item.firebaseKey}">Delete</i>
    </div>
  </div>
  `;
  const authorBooks = item.bookArray;
  authorBooks.forEach((thing) => {
    domString += `
      <div class="card">
        <img class="card-img-top" src=${thing.image} alt=${thing.title} style="width: 298px;" style="height: 400px;">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${thing.title}</h5>
            <p class="card-text bold">${item.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${thing.price}` : `$${thing.price}`}</p>
            <hr>
            <i class="btn btn-success fas fa-eye" id="view-book-btn--${thing.firebaseKey}">View</i>
            <i id="edit-book-btn--${thing.firebaseKey}" class="fas fa-edit btn btn-info">Edit</i>
            <i id="delete-book-btn--${thing.firebaseKey}" class="btn btn-danger fas fa-trash-alt">Delete</i>
        </div>
      </div>`;
  });
  renderToDOM('#view', domString);
};

export default viewAuthor;
// basically copied everything from getBooks and changed instances of book to author.
