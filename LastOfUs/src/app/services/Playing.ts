

https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&keyword=detroit&locale=*&size=35&countryCode=US&stateCode=mi&segmentId=KZFzniwnSyZfZ7v7nJ&genreId=KnvZfZ7vAvA


keyWordsSearch(searchTerm): any {
  return this.http.get(
    `${this.baseUrl}${this.events}${this.API_KEY}&keyword=${searchTerm}`
  );
}


`${this.baseUrl}${this.events}${this.API_KEY}&keyword=${searchTerm}&locale=*&size=${this.size}&countryCode=${this.countryCode}&stateCode=${this.stateCode}&segmentId= ${this.segmentID}&genreId=${this.genreID}`