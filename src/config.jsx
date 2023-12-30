import React from "react";

// check abstraction
const isActive = (item, path) => item.path === path;

// set an 'active' key on each object if
// a child is active
const setActive = (menu, path) => {
  // the returned menu
  let newMenu = {
    ...menu,
  };
  // is this menu active
  let subActive = false;

  // children check
  if (menu.children) {
    newMenu.children = [];
    menu.children.forEach((item) => {
      let { active, menu } = setActive(item, path);
      if (active) {
        subActive = true;
      }
      newMenu.children.push(menu);
    });
  }

  // if one of the children is active or the item itself
  newMenu.active = subActive || isActive(menu, path);

  // return
  return {
    active: newMenu.active,
    menu: newMenu,
  };
};

function menu(items, { level } = { level: 0 }) {
  if (!items) return null;
  return (
    <ul className={`menu menu--level-${level}`}>
      {items.map((item) => {
        return (
          <li
            className={`menu__item menu__item--${
              item.active ? "active" : "not-active"
            }`}
          >
            <a href={item.path} className="menu__item-link">
              <span className="menu__item-inner">{item.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function page(node, { Helmet, processor }) {
  if (!node) return null;

  const menuData =
    setActive({ children: node?.menus?.main?.items }, node.path || "/") || null;

  return (
    <>
      <Helmet>
        <title>{node.title}</title>
        <meta name="description" content={node.description} />
      </Helmet>
      <div class="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="header">
        <div className="header__logo">
          <div className="logo">
            <div className="logo__inner">Newnion</div>
          </div>
        </div>
        {menuData?.menu?.children && (
          <div className="header__menu">{menu(menuData?.menu?.children)}</div>
        )}
      </div>

      <div className="content">
        <div className={`node-page ${node.class || ""}`}>
          <>{node.children && processor.run(node.children)}</>
        </div>
      </div>
    </>
  );
}

const config = {
  types: {
    page: page,
  },
  // for the admin interface
  // admin: {
  //   // for init the admin interface
  //   init: ({ CMS }) => {
  //     CMS.registerPreviewStyle(url);
  //   },
  // },
};
export default config;
