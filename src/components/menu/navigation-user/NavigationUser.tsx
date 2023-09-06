import {useState} from "react";
import {Avatar, Button} from "@radix-ui/themes";
import {PersonIcon} from "@radix-ui/react-icons";

export function NavigationUser() {
  const [isAuthenticated, setIsAutheticated] = useState(false)
  
  if(isAuthenticated)
    return (
      <Avatar fallback={<PersonIcon />} size={"3"} color={'gray'} variant={'soft'}/>
    )
  
  return (
    <Button
    variant={'solid'}
    radius={'large'}
    color={'grass'}
    size={"3"}
    style={{cursor: 'pointer'}}
    onClick={() => setIsAutheticated(true)}
    >
      Entrar
    </Button>
  )
}