export default {
	ListTimesonItemClick () {
		
  storeValue("teamMode", "edit")
    .then(() => storeValue("teamSelected", currentItem))
    .then(() => {
      resetWidget("InputTeamName", true)
      resetWidget("InputTeamDescription", true)
      resetWidget("SwitchAutoAssign", true)
      showModal(ModalTime.name)
    })

	}
}