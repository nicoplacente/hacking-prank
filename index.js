const $ = (el) => document.querySelector(el);

const $form = $("form");
const $modal = $(".modal");

$form.addEventListener("submit", (e) => {
  e.preventDefault();

  const { name, email, password } = Object.fromEntries(new FormData(e.target));

  if (name && email && password) {
    $modal.querySelector(
      "h5"
    ).textContent = `Sorry ${name}, your data is being hacked :)`;
    $modal.style.display = "grid";

    const video = $modal.querySelector("video");
    if (video) {
      video.play();
      video.setAttribute("loop", "true");
    }

    document.title = "Your data is being hacked";
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.href =
        "https://imgs.search.brave.com/1dAjS5etG3X-7TI5BuDC_X3URaa5xZg8jivPyLJ1hZQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQx/Njg4NTIyNy9waG90/by9jYXV0aW9uLXNp/Z24tZGF0YS11bmxv/Y2tpbmctaGFja2Vy/cy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9Y3FqM3NnZ1Nq/QVFsUExTU05LWHNk/Vk9QM1lJNWw5TXdn/Ni1XTVF6eE5WWT0";
    }

    const descarga = document.createElement("a");
    descarga.href = "/coscu.webp";
    descarga.setAttribute("download", "coscu.webp");
    document.body.append(descarga);
    descarga.click();
    document.body.removeChild(descarga);

    const url = "https://codeluxe.tech";

    const popup = window.open(
      url,
      "CodeluxePopup",
      "width=800,height=600,top=100,left=100,resizable=no,scrollbars=yes"
    );

    setTimeout(() => {
      const latitude = Math.random();
      const longitude = Math.random();
      $modal.querySelector(
        "p"
      ).textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
    }, 3000);
  } else {
    alert("You have unfilled fields");
  }
});
