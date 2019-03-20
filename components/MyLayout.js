const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout = props => (
  <div style={layoutStyle}>
    <h1 style={{ textAlign: "center" }}>Hilton Assesment</h1>
    {props.children}
  </div>
);

export default Layout;
