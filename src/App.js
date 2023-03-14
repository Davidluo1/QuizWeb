import "./styles.css";

export default function App() {
  return (
    <div class="App" id="quiz">
      <h2 id="question">Question</h2>
      <ul>
        <li>
          <input class="answer" type="radio" name="problem" id="a" />
          <label for="a" id="a_option">
            A
          </label>
        </li>
        <li>
          <input class="answer" type="radio" name="problem" id="b" />
          <label for="b" id="b_option">
            B
          </label>
        </li>
        <li>
          <input class="answer" type="radio" name="problem" id="c" />
          <label for="c" id="c_option">
            C
          </label>
        </li>
        <li>
          <input class="answer" type="radio" name="problem" id="d" />
          <label for="d" id="d_option">
            D
          </label>
        </li>
      </ul>
      <button class="glow-on-hover" id="submit">
        Submit
      </button>
    </div>
  );
}
