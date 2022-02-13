let dividerState = "/"; // ew mutable state
let outputState = ""; // double ew

// why are you looking at this? it's a mess and full of side-effects dont @ me

const outputEl = document.getElementById("output");
const outputContainerEl = document.getElementById("output-container");

function updateOutputElement() {
  if (outputState.length === 0) {
    outputContainerEl.classList.add("empty");
  } else {
    outputContainerEl.classList.remove("empty");
  }
  return (outputEl.innerText = outputState);
}

function clearOutputState() {
  outputState = "";
  return updateOutputElement();
}

function updateOutputState(event) {
  const target = event.originalTarget;
  const tagAttr = event.originalTarget.attributes["data-tag"];

  if (!tagAttr) return; // safety first

  const tag = tagAttr.value;
  if (outputState.length === 0) {
    outputState = tag;
    return updateOutputElement();
  }

  const newOutput = outputState + dividerState + tag;
  outputState = newOutput;
  return updateOutputElement();
}

function updateDividerState(event) {
  const target = event.originalTarget;
  if (target.checked) dividerState = target.value;
  return clearOutputState();
}

const slash = document.getElementById("slash");
const amp = document.getElementById("amp");
const clear = document.getElementById("clear");
const button = document.getElementById("character-list");
slash.addEventListener("click", updateDividerState, false);
slash.checked = true; // end me
amp.addEventListener("click", updateDividerState, false);
clear.addEventListener("click", clearOutputState, false);
button.addEventListener("click", updateOutputState, false);
