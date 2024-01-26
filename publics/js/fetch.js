//page tags
const datatags = {
  userimg: document.querySelector('.user-img'),
  name: document.querySelector('.user_name'),
  nickname: document.querySelector('.user_nickname'),
  bio: document.querySelector('.main__bio'),
  time: document.querySelector('time'),
  repos: document.querySelector('.repos'),
  followers: document.querySelector('.followers'),
  following: document.querySelector('.following'),
  location : document.querySelector('.location'),
  twitter: document.querySelector('.twitter'),
  website: document.querySelector('.website'),
  company: document.querySelector('.company'),
};
const search = document.querySelector("form");
const loading = document.querySelector(".loading");
const errorTag = document.querySelector(".form__error");
const api = `https://api.github.com/users`;
// data fetching
let fetched = null;
search.onsubmit = async(e) => {
  try {
    e.preventDefault();
    errorTag.classList.remove("form__error--display");
    loading.classList.add("rotate");
    await fetch(`${api}/${e.target.input.value}`)
      .then((res) => res.json())
      .then((data) => fetched = data);
    uploadPage(fetched);
    loading.classList.remove("rotate");
  } catch (error) {
    console.log(error);
    loading.classList.remove("rotate")
  }
};

// page uploading
function uploadPage(data){
  errorTag.textContent = data.message;
  if(!data.message){
  datatags.name.textContent = fetched.name;
  datatags.nickname.textContent = fetched.login;
  datatags.nickname.setAttribute("href", fetched.html_url);
  datatags.time.textContent = `Joined at 
  ${new Date(fetched.created_at).getDate()} 
  ${new Date(fetched.created_at)
  .toLocaleString("default", { month: "short" })} 
  ${new Date(fetched.created_at).getFullYear()}`;

  datatags.userimg.setAttribute("src", fetched.avatar_url);
  datatags.bio.textContent = fetched.bio;
  datatags.repos.textContent = fetched.public_repos;
  datatags.followers.textContent = fetched.followers;
  datatags.following.textContent = fetched.following;
  datatags.location.textContent = fetched.location ? fetched.location : 'Not, Available';
  datatags.twitter.textContent = fetched.twitter_username ? fetched.twitter_username : 'Not, Available';
  datatags.website.textContent = fetched.site_admin ? fetched.site_admin : 'Not, Available';
  datatags.company.textContent = fetched.company ? fetched.company : 'Not, Available';
  }
}

