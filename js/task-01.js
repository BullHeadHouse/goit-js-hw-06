// I-I
const itemsRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsRef.length}`);
// I-I

// I-II
for (let element of itemsRef) {
  console.log(
    `Category: ${element.querySelector("h2").textContent}
Elements: ${element.querySelectorAll("li").length}`
  );
}
// I-II
