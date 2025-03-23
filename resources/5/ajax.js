const url = "http://gamf.nhely.hu/ajax2/";
const code = "VE22CSabc123";
document.getElementById("code").innerHTML = "code=" + code;

async function read() {
  try {
    let response = await fetch(url, {
      method: 'post',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: "code=" + code + "&op=read"
    });
    let data = await response.text();
    try {
      data = JSON.parse(data);
    } catch (jsonError) {
      console.error("Hiba: A válasz nem JSON formátumú!", data);
      return;
    }

    let list = data.list;
    let sum = 0;
    let max = 0;

    let str = "<h3>Adatok lekérése</h3>";
    str += "<p>Rekordok száma: " + data.rowCount + "</p>";
    str += "<p>Utolsó max " + data.maxNum + " records:</p>";
    str += "<table><tr><th>id</th><th>\tname</th><th>height</th><th>weight</th><th>code</th></tr>";

    for (let i = 0; i < list.length; i++) {
      let height = parseFloat(list[i].height);
      if (!isNaN(height)) {
        sum += height;
        if (height > max) {
          max = height;
        }
      }
      str += `<tr>
              <td>${list[i].id}</td>
              <td>${list[i].name}</td>
              <td>${list[i].height}</td>
              <td>${list[i].weight}</td>
              <td>${list[i].code}</td>
          </tr>`;
    }
    str += "</table>";

    let readDiv = document.getElementById("readDiv");
    if (readDiv) {
      readDiv.innerHTML = str;
    }
    else {
      console.error("Hiba: readDiv nem található az oldalon!");
    }

    let count = list.length;
    let avg = count > 0 ? (sum / count).toFixed(2) : 0;

    document.getElementById("sumHeight").innerText = sum;
    document.getElementById("avgHeight").innerText = avg;
    document.getElementById("maxHeight").innerText = max;

  } catch (error) {
    console.error("Hiba az API hívás során:", error);
  }
}

async function create() {
  let nameStr = document.getElementById("name1").value;
  if (nameStr == "" || nameStr.length > 30) {
    document.getElementById("createResult").innerHTML = "Hibás név!";
    return;
  }

  let height = document.getElementById("height1").value;
  if (height == "" || height.length > 30) {
    document.getElementById("createResult").innerHTML = "Hibás magasság!";
    return;
  }

  let weight = document.getElementById("weight1").value;
  if (weight == "" || weight.length > 30) {
    document.getElementById("createResult").innerHTML = "Hibás súly!";
    return;
  }

  let response = await fetch(url, {
    method: 'post',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: "code=" + code + "&op=create&name=" + nameStr + "&height=" + height + "&weight=" + weight
  });

  let data = await response.text();
  if (data > 0) {
    str = "Sikeresen létrehozva";
  }
  else {
    str = "Létrehozás sikertelen!";
    return;
  }

  document.getElementById("createResult").innerHTML = str;
  document.getElementById("name1").value = "";
  document.getElementById("height1").value = "";
  document.getElementById("weight1").value = "";
  read();
}

async function getDataForId() {
  let id = document.getElementById("idUpd").value;
  if (id == "") {  //filter needless API calls
    return;
  }

  let response = await fetch(url, {
    method: 'post',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: "code=" + code + "&op=read"
  });

  let data = await response.text();
  let parsed_data = null;
  try {
    parsed_data = JSON.parse(data);
  } catch (jsonError) {
    console.error("Hiba: A válasz nem JSON formátumú!", data);
    return;
  }
  for (let i = 0; i < parsed_data.list.length; i++)
    if (parsed_data.list[i].id == id) {
      document.getElementById("name2").value = parsed_data.list[i].name;
      document.getElementById("height2").value = parsed_data.list[i].height;
      document.getElementById("weight2").value = parsed_data.list[i].weight;
    }
}

async function update() {
  id = document.getElementById("idUpd").value;
  if (id == "") {
    document.getElementById("updateResult").innerHTML = "ID megadása kötelező!";
    return;
  }

  let nameStr = document.getElementById("name2").value;
  if (nameStr == "" || nameStr.length > 30) {
    document.getElementById("updateResult").innerHTML = "Hibás név!";
    return;
  }

  let height = document.getElementById("height2").value;
  if (height == "" || height.length > 30) {
    document.getElementById("updateResult").innerHTML = "Hibás magasság!";
    return;
  }

  let weight = document.getElementById("weight2").value;
  if (weight == "" || weight.length > 30) {
    document.getElementById("updateResult").innerHTML = "Hibás súly!";
    return;
  }

  let response = await fetch(url, {
    method: 'post',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body:
      "code=" + code + "&op=update&id=" + id + "&name=" + nameStr + "&height=" + height + "&weight=" + weight
  });

  let data = await response.text();
  if (data > 0) {
    str = "Frissítés sikeres";
  }
  else {
    str = "Frissítés sikertelen";
    return;
  }

  document.getElementById("updateResult").innerHTML = str;
  document.getElementById("idUpd").value = "";
  document.getElementById("name2").value = "";
  document.getElementById("height2").value = "";
  document.getElementById("weight2").value = "";
  read();
}

async function deleteF() {
  id = document.getElementById("idDel").value;
  if (id.length > 0 && id.length <= 30) {
    let response = await fetch(url, {
      method: 'post',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: "code=" + code + "&op=delete&id=" + id
    });
    let data = await response.text();
    if (data > 0)
      str = "Törlés sikeres";
    else
      str = "Törlés sikertelen!";
    document.getElementById("deleteResult").innerHTML = str;
    document.getElementById("idDel").value = "";
    read();
  }
  else
    document.getElementById("deleteResult").innerHTML = "Validation error!!";
}

window.onload = function () {
  read();
}; 
