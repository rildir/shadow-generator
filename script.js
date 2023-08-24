const preview = document.getElementById("preview"),
  styles = document.getElementById("styles"),
  ranges = document.querySelectorAll(".settings input"),
  copyButton = document.getElementById("copy-styles");

ranges.forEach((slider) => {
  slider.addEventListener("input", generateStyles);
});

function generateStyles() {
  const xShadow = document.getElementById("x-shadow").value;
  const yShadow = document.getElementById("y-shadow").value;
  const blurRadius = document.getElementById("blur-r").value;
  const spreadRadius = document.getElementById("spread-r").value;
  const shadowColor = document.getElementById("shadow-color").value;
  const shadowOpacity = document.getElementById("shadow-opacity").value;
  const shadowInset = document.getElementById("inset-shadow").checked;
  const borderRadius = document.getElementById("border-r").value;
  const width = document.getElementById("width").value;
  const height = document.getElementById("height").value;
  const bgColor = document.getElementById("bgColor").value;
  const borderColor = document.getElementById("borderColor").value;

  const boxShadow = `${
    shadowInset ? "inset " : ""
  }${xShadow}px ${yShadow}px ${blurRadius}px ${spreadRadius}px ${hexToRgba(
    shadowColor,
    shadowOpacity
  )}`;

  preview.style.boxShadow = boxShadow;
  preview.style.borderRadius = `${borderRadius}px`;
  preview.style.width = `${width}rem`;
  preview.style.height = `${height}rem`;
  preview.style.backgroundColor = `${bgColor}`;
  preview.style.borderColor = `${borderColor}`;

  const xShadowInput = document.getElementById("x-shadow-input"),
    xShadowRange = document.getElementById("x-shadow");

  xShadowRange.addEventListener("input", function () {
    xShadowInput.value = xShadowRange.value;
  });

  xShadowInput.addEventListener("input", function () {
    xShadowRange.value = xShadowInput.value;
  });

  const yShadowRange = document.getElementById("y-shadow"),
    yShadowInput = document.getElementById("y-shadow-input");

  yShadowRange.addEventListener("input", function () {
    yShadowInput.value = yShadowRange.value;
  });

  yShadowInput.addEventListener("input", function () {
    yShadowRange.value = yShadowInput.value;
  });

  const blurR = document.getElementById("blur-r"),
    blurRadiusInput = document.getElementById("blur-r-input");

  blurR.addEventListener("input", function () {
    blurRadiusInput.value = blurR.value;
  });

  blurRadiusInput.addEventListener("input", function () {
    blurR.value = blurRadiusInput.value;
  });

  const spreadR = document.getElementById("spread-r"),
    spreadRadiusInput = document.getElementById("spread-r-input");

  spreadR.addEventListener("input", function () {
    spreadRadiusInput.value = spreadR.value;
  });

  spreadRadiusInput.addEventListener("input", function () {
    spreadR.value = spreadRadiusInput.value;
  });

  const shadowO = document.getElementById("shadow-opacity"),
    shadowOInput = document.getElementById("shadow-opacity-input");

  shadowO.addEventListener("input", function () {
    shadowOInput.value = shadowO.value;
  });

  shadowOInput.addEventListener("input", function () {
    shadowO.value = shadowOInput.value;
  });

  styles.textContent = `-webkit-box-shadow: ${boxShadow};
-moz-box-shadow: ${boxShadow};
box-shadow: ${boxShadow};
border-radius: ${borderRadius}px;`;
}

function hexToRgba(shadowColor, shadowOpacity) {
  const r = parseInt(shadowColor.substr(1, 2), 16);
  const g = parseInt(shadowColor.substr(3, 2), 16);
  const b = parseInt(shadowColor.substr(5, 2), 16);

  return `rgba(${r},${g},${b}, ${shadowOpacity})`;
}

function copyStyles() {
  styles.select();
  document.execCommand("copy");
  copyButton.innerText = "Copied!";
  setTimeout(() => {
    copyButton.innerText = "Copy Styles";
  }, 1000);
}

generateStyles();
