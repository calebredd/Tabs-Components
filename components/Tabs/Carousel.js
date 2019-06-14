const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
previous.addEventListener("click", () =>{
  let insert=document.querySelector(".tabs-link-selected").dataset.tab-1;
  const last = document.querySelectorAll(".tabs-link").length;
  if(insert<1){
    insert=last;
  }
  let selection = document.querySelector(
    `.tabs-link[data-tab="${insert}"]`
  );
  const links=document.querySelectorAll(".tabs-link");
  Array.from(links).forEach(link =>
      link.classList.remove("tabs-link-selected")
    );
    selection.classList.add("tabs-link-selected");
  let selectionTab = document.querySelector(
    `.tabs-item[data-tab="${insert}"]`
  );
    selectionTab
  const tbs = document.querySelectorAll(".tabs-item");
  Array.from(tbs).forEach(tabItem =>
    tabItem.classList.remove("tabs-item-selected")
  );
  selectionTab.classList.add("tabs-item-selected");
});


next.addEventListener("click", () =>{
  const last=document.querySelectorAll(".tabs-link").length;
  let insert=Number(document.querySelector(".tabs-link-selected").dataset.tab)+1;
  if(insert>last){
    insert=1;
  }
  let selection = document.querySelector(
    `.tabs-link[data-tab="${insert}"]`
  );
  const links=document.querySelectorAll(".tabs-link");
  Array.from(links).forEach(link =>
      link.classList.remove("tabs-link-selected")
    );
    selection.classList.add("tabs-link-selected");
  let selectionTab = document.querySelector(
    `.tabs-item[data-tab="${insert}"]`
  );
    selectionTab
  const tbs = document.querySelectorAll(".tabs-item");
  Array.from(tbs).forEach(tabItem =>
    tabItem.classList.remove("tabs-item-selected")
  );
  selectionTab.classList.add("tabs-item-selected");
});
