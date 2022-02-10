import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
let exampleOne = `.sass_variables {
  background-color: $primary-color;
}`

let exampleTwo = `.sass_nesting {
  p {
    background-color: $primary-color;
  }
}`

let exampleThree = `a {
  color: blue;

  &:hover { 
    color: orange; 
  }
}`

let exampleFour = `@import '../../styles/_variables.scss'
.sass_partial {
  background-color: $primary-color;
  color: $blue-light;
}`

let exampleFive = `@mixin flexy($justify-direction) {
  display: flex;
  justify-content: $justify-direction;
}

.sass_mixin {
  @include flexy(center);
}`

let exampleSix = `@function invert($color, $amount: 100%) {
  $inverse: change-color($color, $hue: hue($color) + 180);
  @return mix($inverse, $color, $amount);
}

.sass_function {
  background-color: invert($primary-color, 60%);
}`

let exampleSeven = `.sass {
  border: 1px #f00;
  background-color: yellow;
}

.sass-extended {
  @extend .sass;
  border-width: 5px;
  border-style: dashed;
}`

  return (
    <>
      <Head>
        <title>Next CSS Practice</title>
        <meta name="description" content="Next CSS Practice" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 id="sass">
          Sass
        </h1>

        <section>
          <h2>
            Using variables
          </h2>
          <p className={styles.sass_variables}>$primary-color: lime;</p>
          <code>
            {exampleOne}
          </code>
        </section>

        <section className={styles.sass_nesting}>
          <h2>
            Nesting
          </h2>
          <p>$secondary-color: red;</p>
          <code>
            {exampleTwo}
          </code>
        </section>

        <section>
          <h2>
            Nesting & Psuedo-selectors
          </h2>
          <a href='https://sass-lang.com/guide'>I am a link</a>
          <code>
            {exampleThree}
          </code>
        </section>

        <section>
          <h2>
            Partials
          </h2>
          <p className={styles.sass_partial}>This is using an imported partial file</p>
          <code>
            {exampleFour}
          </code>
        </section>

        <section>
          <h2>
            Mixins
          </h2>
          <p className={styles.sass_mixin}>This is using a mixin to dynamically flex the container</p>
          <code>
            {exampleFive}
          </code>
        </section>

        <section>
          <h2>
            Functions
          </h2>
          <div className={styles.sass_function}>
            <p>This is using a function to dynamically inverts color</p>
          </div>
          <code>
            {exampleSix}
          </code>
        </section>

        <section>
          <h2>
            Extending
          </h2>
          <div className={styles.sass_extended}>
            <p>This classname extends another</p>
          </div>
          <code>
            {exampleSeven}
          </code>
        </section>
      </main>
    </>
  )
}
