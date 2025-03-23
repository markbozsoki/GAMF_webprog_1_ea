code = "VE22CSabc123";
url = "http://gamf.nhely.hu/ajax2/";
async function read() {
  document.getElementById("code").innerHTML = "code=" + code;
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
    str += "<p>Number of records: " + data.rowCount + "</p>";
    str += "<p>Last max " + data.maxNum + " records:</p>";
    str += "<table><tr><th>id</th><th>name</th><th>height</th><th>weight</th><th>code</th></tr>";

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
    } else {
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
  nameStr = document.getElementById("name1").value;
  height = document.getElementById("height1").value;
  weight = document.getElementById("weight1").value;
  if (nameStr.length > 0 && nameStr.length <= 30 && height.length > 0 && height.length <= 30 &&
    weight.length > 0 && weight.length <= 30 && code.length <= 30) {
    let response = await fetch(url, {
      method: 'post',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: "code=" + code + "&op=create&name=" + nameStr + "&height=" + height + "&weight=" + weight
    });
    let data = await response.text();
    if (data > 0)
      str = "Sikeresen létrehozva";
    else
      str = "Létrehozás sikertelen!";
    document.getElementById("createResult").innerHTML = str;
    document.getElementById("name1").value = "";
    document.getElementById("height1").value = "";
    document.getElementById("weight1").value = "";
    read();
  }
  else
    document.getElementById("createResult").innerHTML = "Validation error!!";
}

async function getDataForId() {
  let response = await fetch(url, {
    method: 'post',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: "code=" + code + "&op=read"
  });
  let data = await response.text();
  data = JSON.parse(data);
  let list = data.list;
  for (let i = 0; i < list.length; i++)
    if (list[i].id == document.getElementById("idUpd").value) {
      document.getElementById("name2").value = list[i].name;
      document.getElementById("height2").value = list[i].height;
      document.getElementById("weight2").value = list[i].weight;
    }
}

async function update() {
  id = document.getElementById("idUpd").value;
  nameStr = document.getElementById("name2").value;
  height = document.getElementById("height2").value;
  weight = document.getElementById("weight2").value;
  if (id.length > 0 && id.length <= 30 && nameStr.length > 0 && nameStr.length <= 30 && height.length > 0 &&
    height.length <= 30 && weight.length > 0 && weight.length <= 30 && code.length <= 30) {
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
    if (data > 0)
      str = "Frissítés sikeres";
    else
      str = "Frissítés sikertelen";
    document.getElementById("updateResult").innerHTML = str;
    document.getElementById("idUpd").value = "";
    document.getElementById("name2").value = "";
    document.getElementById("height2").value = "";
    document.getElementById("weight2").value = "";
    read();
  }
  else
    document.getElementById("updateResult").innerHTML = "Validation error!!";
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
