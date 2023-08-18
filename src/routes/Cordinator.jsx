export const goToPokedexStorage = (navigate) => {
    navigate("/storage")
}
export const goToPokeDetail= (navigate, name) => {
  navigate(`/detail/${name}`)
}
export const goToHome= (navigate) => {
  navigate("/")
}