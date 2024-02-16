"use client"

import { useEffect } from "react";

function Bootstrapjs() {
    useEffect(()=>{
        require('../../../node_modules/bootstrap/dist/js/bootstrap.bundle');
    }, [])
  return null
}

export default Bootstrapjs