import React, { useState, useEffect } from "react";
import "./styles/dg_addPost.css";
import DG_addPost_title from "./DG_addPost_title";
import DG_addPost_content from "./DG_addPost_content";

const DG_addPost = (props) => {
  //predefined values
  const [fonts, setFonts] = useState([
    "baloo",
    "modak",
    "poppins",
    "galada",
    "montserrat",
    "caveat",
    "cinzel",
  ]);

  const [textColor, setTextColor] = useState([
    "black",
    "white",
    "red",
    "yellow",
    "blue",
    "green",
  ]);
  const [textSize, setTextSizes] = useState(["small", "normal", "large"]);
  //variables
  const [title, setTitle] = useState({
    tag: "",
    text: "",
    className: "",
  });
  const [content, setContent] = useState([
    {
      tag: "",
      text: "",
      className: "",
    },
  ]);
  //togglers
  const [titleTog, toggleTitleTog] = useState(false);

  //content renderer
  const renderContent = (contents) => {
    if (contents.tag == "a")
      return (
        <a
          href="#"
          onClick={() => {
            window.open(contents.text, "_blank");
          }}
        >
          {contents.text}
        </a>
      );
    const Tag = contents.tag.length > 0 ? contents.tag : "p";
    return <Tag className={contents.className}>{contents.text}</Tag>;
  };

  return (
    <div className="dg-addpost-container">
      <h2>Create New Content</h2>
      <br />

      {/* title */}
      <div>
        {titleTog ? (
          <div
            className="dg-addpost-content"
            onClick={() => toggleTitleTog(false)}
          >
            {renderContent(title)}
          </div>
        ) : (
          <DG_addPost_title
            title={title}
            setTitle={setTitle}
            toggleTitleTog={toggleTitleTog}
            fonts={fonts}
            textColor={textColor}
            textSize={textSize}
          />
        )}
      </div>
      {/* content */}
      <div>
        {content.map((item) => {
          return renderContent(item);
        })}
        <DG_addPost_content
          content={content}
          setContent={setContent}
          fonts={fonts}
          textColor={textColor}
          textSize={textSize}
        />
      </div>
    </div>
  );
};

export default React.memo(DG_addPost);
