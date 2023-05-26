export default function Login() {
  return (
    <section className="login-area">
      <div>
        <h2>Portal do Aluno</h2>
      <form action="">
        <input type="text" name="user-email" id="email" placeholder="Email:" />
        <input type="password" name="user-pass" id="pass" placeholder="Senha:" />
        <p><a href="#">Esqueceu sua senha?</a></p>
        <button className="btn-login" type="submit">Entrar</button>
      </form>
      </div>
    </section>
  )
}