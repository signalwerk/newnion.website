import React from "react";

function page(node, { Helmet, processor }) {
  if (!node) return null;
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
