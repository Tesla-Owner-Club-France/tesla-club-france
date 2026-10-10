const LOGO_PATH = '/assets/img/logo_text.png'

export function LogoText() {
    const isDevEnv = process.env.NEXT_PUBLIC_APP_ENV_NAME == "dev";
    const isQualifEnv = process.env.NEXT_PUBLIC_APP_ENV_NAME == "qualif";
  return (
    <>
        <div className="w-32">
            <img src={LOGO_PATH} alt="Partie text du logo du Tesla Owner Club France"/>
            {isDevEnv && <div style={{color: "red"}}> DEV </div>}
            {isQualifEnv && <div style={{color: "green"}}> QUALIF </div>}
        </div>
    </>
  );
}
