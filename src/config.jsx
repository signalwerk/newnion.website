import React from "react";
import { PageMenu } from "../packages/signalwerk.documentation.md/src/components/helpers/PageMenu/";

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
          <a href="/" className="logo__link">
            <div className="logo">
              <div className="logo__inner">Newnion</div>
            </div>
          </a>
        </div>
        <div className="header__menu">
          <PageMenu page={node} name="main" />
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
