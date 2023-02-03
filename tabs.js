function openCity(evt, id) {
    let section = document.getElementById('section');    
    section.innerHTML = '';
    tablinks = document.getElementsByClassName("tablinks");  
    
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
    if(id == 'page1'){        
        section.innerHTML = `<div id="page1" class="pagesjs">
        <h1>Page 1</h1>
        <div class="contenu">
          <h2 style="text-align:center;">Passe ta souris !</h2>
          <table id="tableau1">
            <tr>
              <td onmouseover="getimg()" onmouseout="nomoreImg()">
                <a href="src/img1.jpg">Lien 1</a>
              </td>
              <td onmouseover="getimg1()" onmouseout="nomoreImg()">
                <a href="src/img2.jpg" class="lien">Lien 2</a>
              </td>
              <td onmouseover="getimg2()" onmouseout="nomoreImg()">
                <a href="src/img3.jpg" class="lien">Lien 3</a>
              </td>
            </tr>
          </table>
          <div id="img">
            <!-- JS génère l'image suivant le lien -->
          </div>
        </div>
      </div>`;
    
    }else if(id == 'page2') {
        section.innerHTML = `<div id="page2" class="pages">
        <h1>Page 2</h1>
        <div class="contenu">
          <fieldset>
            <legend>Entre tes informations</legend>
            <div>
              <input type="text" placeholder="entre ton prénom" id="prenom" />
            </div>
            <div>
              <input type="text" placeholder="entre ton nom" id="nom" />
            </div>
            <div>
              <input type="button" id="btnAdd" value="Ajouter" />
            </div>
          </fieldset>
          <div id="table">
            <!-- tableau généré en Js -->
          </div>
        </div>
      </div>
      `;
    }else if(id == 'page3') {
        section.innerHTML = `<div id="page3" class="pagesjs">
        <h1>Page 3</h1>
        <div class="contenu">
          <h2>Choisis ton style !</h2>
          <select name="styles" id="styleSelect">
            <option>Quel style ?</option>
            <option value="css1" id="css1">Style CSS 1</option>
            <option value="css2" id="css2">Style CSS 2</option>
            <option value="css3" id="css3">Style CSS 3</option>
          </select>
          <h4>Mon petit paragraphe</h4>
          <p id="petitP">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt."
          </p>
        </div>
      </div>`;
    }else if(id == 'page4') {
        section.innerHTML = `<div id="page4" class="pagesjs">
        <h1>Page 4</h1>
        <div class="contenu">
          <h2>Modifie l'ordre !</h2>
          <ul id="liste">
            <li class="liPage4">- Un petit 1</li>
            <li class="liPage4">- Un petit 2</li>
            <li class="liPage4">- Un petit 3</li>
            <li class="liPage4">- Un petit 4</li>
            <li class="liPage4">- Un petit 5</li>
          </ul>
          <div>
            <input type="button" value="Inverser" id="inverser" />
          </div>
        </div>
      </div>`;
    }else {
        section.innerHTML = `<div id="page5" class="pagesjs">
        <h1>Page 5</h1>
        <div id="div2page5" class="contenu">
          <fieldset>
            <legend>Les animaux que tu aimes</legend>

            <div>
              <input type="checkbox" class="case" id="case1" name="cheval" />
              <label for="cheval">Cheval</label>
            </div>

            <div>
              <input type="checkbox" class="case" id="case2" name="chien" />
              <label for="chiens">Chien</label>
            </div>

            <div>
              <input type="checkbox" class="case" id="case3" name="chat" />
              <label for="chat">Chat</label>
            </div>

            <div>
              <input type="checkbox" class="case" id="case4" name="raton" />
              <label for="raton">Raton laveur</label>
            </div>
          </fieldset>
          <legend>Les afficher dans :</legend>
          <div>
            <input
              type="radio"
              id="getDiv"
              name="bouton"
              value="div"
              onclick="afficher()"
            />
            <label for="div">une "div"</label>
          </div>
          <div>
            <input
              type="radio"
              id="getSelect"
              name="bouton"
              value="select"
              onclick="afficher()"
            />
            <label for="select">un menu select</label>
          </div>
        </div>
      </div>`;
    }
    
}

