const data = [
    { title: "How (not) to Blog", tagline: "There are a lot of good reasons to blog, this is not one of them", 
      text: "For a while now I have wanted to come up with a project to learn code in my spare time, I also always wanted to come up with a reason to blog. If I learn to crate my own blog and write about that I might fulfill both these goals. It also might just end up being a monstrosity. Either way I hope to learn someting on the way",
      additionalInfo: "lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    { title: "How (not) to Learn React", tagline: "doing the frontends", 
      text: "adding basic static layout using components",
      additionalInfo: "lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];

function getPosts() {
    return data;
}

module.exports = {
    getPosts: getPosts
  };