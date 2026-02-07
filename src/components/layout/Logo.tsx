import Link from "next/link";
import { Container } from "@/components/ui";
import { SITE_CONFIG } from "@/types";

const LOGO_PATH = '/assets/img/logo.png'

export function Logo() {

  return (
    <>
      <img src={LOGO_PATH} alt="Logo du Tesla Owner Club France"/>
    </>
  );
}
