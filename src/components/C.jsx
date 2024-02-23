

import React from 'react'

function C(korisnici) {
    console.log(korisnici.korisnici)
  return (

    <div>{korisnici.korisnici[2].name}, {korisnici.korisnici[2].godina}</div>
  )
}

export default C