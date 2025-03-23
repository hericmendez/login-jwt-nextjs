"use client";
const SettingsPage = () => {
  return (
    <div className="flex flex-col items-start justify-start h-screen ms-5 mt-5">
      <h1 className="text-2xl font-bold">Sobre o projeto</h1>
      <br />
      <p>Esta é uma aplicação de login por JWT feita para uso em projetos futuros.</p>
      <br />
      <p>Repositório do projeto:</p>
      <a className="text-white hover:text-blue-400 hover:underline" href="https://github.com/hericmendez/login-jwt-nextjs">https://github.com/hericmendez/login-jwt-nextjs</a>
    </div>
  );
};

export default SettingsPage;
