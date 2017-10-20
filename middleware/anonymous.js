export default function ({ store, redirect }) {
  if (store.state.count) {
  	console.log('here')
    return redirect('/')
  }
}
