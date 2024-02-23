import React from 'react'

function A(korisnici) {
  return (
    <div>{korisnici.korisnici[0].name}, {korisnici.korisnici[0].godina}</div>
  )
}

export default A