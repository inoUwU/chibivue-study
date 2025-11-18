export type Option = {
  render: () => string;
};

export type App = {
  mount: (selector: string) => void;
};

export const createApp = (option: Option): App => {
  return {
    mount: (selector) => {
      const root = document.querySelector(selector);
      if (root) {
        root.innerHTML = option.render();
      }
    },
  };
};
