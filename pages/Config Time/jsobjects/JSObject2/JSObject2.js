export default {
	BtnEditonClick () {
  storeValue("teamSelected", currentItem)
    .then(() => storeValue("teamMode", "edit"))
    .then(() => {
      resetWidget("InputTeamName", true)
      resetWidget("InputTeamDescription", true)
      resetWidget("SwitchAutoAssign", true)
      showModal(ModalTeam.name)
    })

	}
}