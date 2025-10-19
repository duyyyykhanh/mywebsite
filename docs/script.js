function upDate(previewPic) {
  console.log("Event triggered!");
  console.log("Image source:", previewPic.src);
  console.log("Alt text:", previewPic.alt);

  const imageDiv = document.getElementById("image");
  imageDiv.innerHTML = previewPic.alt;

  // Thay đổi background image
  imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
}

function undo() {
  const imageDiv = document.getElementById("image");

  // Đưa background về mặc định
  imageDiv.style.backgroundImage = "url('')";

  // Đưa text về mặc định
  imageDiv.innerHTML = "Hover over an image below to display here.";
}
