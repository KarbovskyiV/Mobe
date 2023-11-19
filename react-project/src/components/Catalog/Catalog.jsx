import React, { useState, useEffect } from "react";
import axios from "../../utils/axios.js";
import styles from "./MenuNav.module.scss";
import cn from "classnames";
import IconClose from "../IconsClose/IconClose.jsx";
import IconOpen from "../IconsClose/IconOpen.jsx";

import {
  MobileContext,
  CatalogOpenedContext,
  GetCatalogContext,
  ProductsOpenedContext,
} from "../../App.js";

const Catalog = () => {
  const { mobile } = React.useContext(MobileContext);
  const [menuCatalogMobileOpened, setMenuCatalogMobileOpened] = React.useState(
    mobile ? false : true
  );
  const { category, setCategory } = React.useContext(GetCatalogContext);

  const { catalogOpened, setCatalogOpened } =
    React.useContext(CatalogOpenedContext);
  const [menuData, setMenuData] = useState([]);
  const { productsOpened, setProductsOpened } = React.useContext(
    ProductsOpenedContext
  );

  useEffect(() => {
    if (catalogOpened === true) {
      axios
        .get("/products")
        .then((res) => {
          setMenuData(res.data);
          const transformedData = transformData(res.data);

          setCategory(transformedData);
        })
        .catch((err) => {
          console.log(22, err);
        });
    }

    return () => {
      /* setCatalogOpened(false); */
    };
  }, [catalogOpened]);

  console.log(category, "category");

  const transformData = (data) => {
    const transformedData = [];

    data.forEach((item) => {
      const categoryIndex = transformedData.findIndex(
        (cat) => cat.label === item.category.name
      );

      if (categoryIndex === -1) {
        transformedData.push({
          label: item.category.name,
          submenu: item.name ? [{ label: item.name }] : null,
          category_id: item.category_id,
        });
      } else {
        if (item.name) {
          transformedData[categoryIndex].submenu = [
            ...(transformedData[categoryIndex].submenu || []),
            { label: item.name },
          ];
        }
      }
    });

    return transformedData;
  };

  const catalogList = category;

  const MenuItem = ({ item }) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const handleSubMenuToggle = () => {
      setIsSubMenuOpen(!isSubMenuOpen);
    };

    return (
      <li>
        <div onClick={handleSubMenuToggle}>{item.label}</div>
        {isSubMenuOpen && item.submenu && <SubMenu items={item.submenu} />}
      </li>
    );
  };

  const SubMenu = ({ items }) => {
    return (
      <ul
        style={
          menuCatalogMobileOpened ? { display: "flex" } : { display: "none" }
        }
      >
        {items.map((subItem, index) => (
          <MenuItem key={index} item={subItem} />
        ))}
      </ul>
    );
  };

  const boxRef = React.createRef();

  const handleMouseEnter = () => {
    setProductsOpened(true);
  };

  const handleMouseLeave = () => {
    setProductsOpened(true);
  };

  const a = (x) => {
    return 142 + x * 42 + x * 6;
  };

  return (
    <div className="catalog__container2">
      {category && (
        <nav className={styles.menu} role="navigation">
          <div
            onClick={() => setCatalogOpened(false)}
            className={cn(styles.cover, {
              [styles.coverShow]: catalogOpened,
            })}
          />
          <div
            className={cn(styles.mobileMenuBox, {
              [styles.mobileMenuBoxShow]: catalogOpened,
            })}
          >
            <div
              onClick={() =>
                setMenuCatalogMobileOpened(!menuCatalogMobileOpened)
              }
              className={styles.mobileMenuTitle}
              style={mobile ? { display: "flex" } : { display: "none" }}
            >
              <p>Catalog of goods</p>
              {!menuCatalogMobileOpened === true ? <IconClose /> : <IconOpen />}
            </div>
            <ul
              style={
                menuCatalogMobileOpened
                  ? { display: "flex" }
                  : { display: "none" }
              }
            >
              {catalogList.map((obj, i) => (
                <li
                  ref={boxRef}
                  key={i}
                  onMouseLeave={handleMouseLeave}
                  onMouseEnter={handleMouseEnter}
                >
                  <a href="##">{obj.label}</a>
                  {mobile ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="#FDFDFD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M9 18L15 12L9 6"
                        stroke="#FDFDFD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  <ul
                    style={
                      mobile
                        ? productsOpened
                          ? {
                              visibility: "visible",
                              top: a(obj.id),
                              height: 304,
                            }
                          : { visibility: "hidden" }
                        : { width: 300 }
                    }
                  >
                    {menuData
                      .filter((cat) => cat.category_id === obj.category_id)
                      .map((object, i) => (
                        <li key={i}>
                          <a href="##">{object.name}</a>
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
            </ul>
            <div
              className={styles.mobileMenuFooter}
              style={mobile ? { display: "flex" } : { display: "none" }}
            >
              <a href="##">Contacts</a>
              <a href="##">Delivery and payment</a>
              <a href="##">Returns and exchanges</a>
              <a href="##">Privacy Policy</a>
              <a href="##">Security Policy</a>
              <a href="##">Terms of use</a>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Catalog;
