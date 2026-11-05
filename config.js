// Which databases have element lists, and where those lists live.
//
// dir  : folder (relative to index.html) holding <SUBDETECTOR>/<SYSTEM> files,
//        e.g. element_names_by_system/LAR/ATLLARHV2
// skip : systems that have no file; they stay plain text in the tree.
//
// A database that is not listed here has no links.
// To add one, put its folder next to index.html and add a line below.
window.ELEMENT_LISTS = {
  ATONR_ADG: { dir: "element_names_by_system", skip: ["System1"] },
  INT8R:     { dir: "element_names_by_system_INT8R", skip: ["System1"] }
};
