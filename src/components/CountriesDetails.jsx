
export const CountriesDetails = ({data}) => {
  return (
    <div className="d-flex flex-wrap justify-content-space">
      {data.map((country, index) => (
        <div key={index} className="col-md-4 mb-4 d-flex flex-column justify-content-space">
          <div className="card" style={{width: '500px'}}>
            <img 
            className="w-100 border border-secondary" style={{height: '275px'}}
              src={country.img || 'https://via.placeholder.com/150x100?text=No+Flag'} 
              alt={country.name} 
            />
            <div className="border border-secondary">
              <h5 className="card-title">{country.name}</h5>
              <p className="card-text">
                Population: {country.population.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
