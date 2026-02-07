import Link from "next/link";
import { Container } from "@/components/ui";
import { SITE_CONFIG } from "@/types";

const LOGO_PATH = '/assets/img/logo_text.png'

export function LogoText() {

  return (
    <>
        <div className="w-32">
            <img src={LOGO_PATH} alt="Partie text du logo du Tesla Owner Club France"/>
        </div>
    </>
  );
}
