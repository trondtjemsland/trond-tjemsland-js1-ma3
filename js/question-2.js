// Question 2

async function getArray() {
  try {
    const response = await fetch(
      'https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating'
    );
    const jsonResult = await response.json();
    console.log(jsonResult.results);

    document.querySelector('.loading').classList.add('hide');

    for (let i = 0; i < jsonResult.results.length; i++) {
      document.querySelector('.cardContainer').innerHTML += `
        <div class="cards">
            <h2>Name: ${jsonResult.results[i].name}</h2>
            <p>Rating: ${jsonResult.results[i].rating}</p>
            <p>Number of Tags: ${jsonResult.results[i].tags.length}</p>
        </div>
      `;
      if (i === 7) {
        break;
      }
    }
  } catch (error) {
    document.querySelector('.alert').innerHTML = showAlertTouser(
      'An error occured',
      'danger'
    );
    console.log(err);
  } finally {
    document.querySelector('.loading').classList.add('hide');
  }
}

getArray();
