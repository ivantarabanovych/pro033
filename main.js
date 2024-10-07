function createCard(title, description) {
  return `
    <div class="card">
    <h2>[title]</h2>
    <p>[description]</p>
    </div>
    `;
}

const cardHTML = createCard("Title", "Description");
console.log(cardHTML);

