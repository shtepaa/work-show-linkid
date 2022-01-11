var playList = [
    {
      author: "LED ZEPPELIN",
      song: "STAIRWAY TO HEAVEN"
    },
    {
      author: "QUEEN",
      song: "BOHEMIAN RHAPSODY"
    },
    {
      author: "LYNYRD SKYNYRD",
      song: "FREE BIRD"
    },
    {
      author: "DEEP PURPLE",
      song: "SMOKE ON THE WATER"
    },
    {
      author: "JIMI HENDRIX",
      song: "ALL ALONG THE WATCHTOWER"
    },
    {
      author: "AC/DC",
      song: "BACK IN BLACK"
    },
    {
      author: "QUEEN",
      song: "WE WILL ROCK YOU"
    },
    {
      author: "METALLICA",
      song: "ENTER SANDMAN"
    }
  ];
  const ul = document.createElement("ul");
  const mainDiv = document.getElementById("content");
  mainDiv.append(ul);
  for (let i in playList) {
    const li = document.createElement("li");
    const pBtn = document.createElement("p");
    pBtn.append(playList[i].author);
    pBtn.append(" : ");
    pBtn.append(playList[i].song);
    li.append(pBtn);
    ul.append(li);
  }
  //2. Создать HTML-страницу с кнопкой "Открыть"
  // и модальным окном. На модальном окне должен быть
  // текст и кнопка "Закрыть". Изначально модальное
  // окно не отображается. При клике на кнопку
  // "Открыть" появляется модальное окно, на
  // кнопку "Закрыть" – исчезает.
  
  const btn = document.createElement("button");
  const p = document.createElement("p");
  p.textContent = "Open";
  btn.append(p);
  mainDiv.append(btn);
  btn.addEventListener("click", () => {
    const div = document.createElement("div");
    div.setAttribute("id", "modal__div");
    const p = document.createElement("p");
    p.textContent = "Noting to read here, just close it";
    div.append(p);
    const innerBtn = document.createElement("button");
    const innerBtnP = document.createElement("p");
    innerBtnP.textContent = "Close";
    innerBtn.append(innerBtnP);
    div.append(innerBtn);
    mainDiv.append(div);
    btn.disabled = true;
    innerBtn.addEventListener("click", () => {
      div.remove();
      btn.disabled = false;
    });
  });
  // Создать HTML-страницу со светофором и кнопкой,
  // которая переключает светофор на следующий цвет.
  const trafficLights = document.querySelector("div.traffic__light");
  
  const redlight = document.getElementById("red");
  const yellowlight = document.getElementById("yellow");
  const greenlight = document.getElementById("green");
  const butn = document.getElementById("btn");
  
  butn.addEventListener("click", function() {
    if (redlight.classList.contains("traffic__red")) {
      redlight.classList.remove("traffic__red");
      yellowlight.classList.add("traffic__yellow");
    } else if (yellowlight.classList.contains("traffic__yellow")) {
      yellowlight.classList.remove("traffic__yellow");
      greenlight.classList.add("traffic__green");
    } else if (greenlight.classList.contains("traffic__green")) {
      greenlight.classList.remove("traffic__green");
      redlight.classList.add("traffic__red");
    }
  });