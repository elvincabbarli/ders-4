import { useContext } from "react";
import { ThemeContext } from "../Components/ThemeContext";

const ThemePage = () => {
  const { setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <div>
      <h1>HEADING 1</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
        consequuntur cumque laborum, nisi blanditiis praesentium distinctio
        velit sapiente ullam nobis maxime repellendus error architecto, culpa
        itaque dolores reprehenderit exercitationem modi.
      </p>

      <button onClick={toggleTheme}>Temani Deyiw</button>
    </div>
  );
};

export default ThemePage;
