import * as React from "react";
// Constants
import Image from 'next/image'
// Styles

export interface ILoadingProps { }

const Loading: React.FunctionComponent<ILoadingProps> = (props: React.PropsWithChildren<ILoadingProps>): JSX.Element => {

    return (
        <div>
            <div>
                <Image
                    alt="App loading logo"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAF8ElEQVR4nO3du2tTfxzG8SdN0lRJ0xYVl6KtIvTnH1FdvEC9DeINim52c1EXHeuiTk6OSgUVJ5WAOql/hETEK1lEpRdFm97yG8TjadEKVjj99Hm/pi+HDs9w3slJl5OrHehrCjDVkvUAIEsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGuFrAf8K7lCUZ27jqi9f0ClDVvU0rY660mSpLnJr2q8e6HPT6sae3hLzZnpX/5d9P1R5WoH+ppZj1iqwpr16j53VaXevqynLKrxuqb6hSHNfHo/73r0/ZGFfwTKFYohbh5JKvX2qfv8VeWKrcm16PujC/8I1LnrcHLzNGem9eHaJU08uafZL+MZL/suX+5QZds+rTtxRrlCUaWePnXuPKTR6g1J8/dHsHB/dOG/Adr79yTnD9cva7Q6smxufkma/TKu0eqIPt68klxLb06fo4i4+XfCB9C2aWtynnh8N8Mlixt/dCc5t/X+9/Oc2h9Fen904QPIFYrJeTl98i+U3rbwN0A0K+k3QPgAgKUgAFgjAFgjAFgjAFgjAFgjAFgjAFgjAFgjAFgjAFgjAFgjAFgjAFgjAFgjAFgjAFgjAFgjAFgjAFgjAFgjAFgjAFgjAFgjAFgjAFgjAFgjAFgjAFgjAFgjAFgjAFgjAFgLH0D6vbX5ckeGSxaX3jY3+TU5R3zvbnp/dOEDmHz1LDlXtu/PcMniOnYcTM6Ndy+Sc3p/FOn90YUP4PPTanJed/y0ugYGlS9XMlw0X75cUdfAoNYeO5VcS29On6OIuPl3wr8pPlds1caLt1XqifGu3cab53p79pCa01OS4u+PLvw3QHN6SvXhITVe17Ke8keNNzXVh0/Ou3mi748u/DfAD7lCUZ27j6qyba9auzerpW1V1pMkSXOT3zRVf6mJJ/c19uDmb3/0Rt8f1YoJAPgb4R+BgKUoZD3gX8kViurcdUTt/QMqbdiilrbVWU+S9P1/5o13L/T5aVVjD28t/ggUeH9UK+IRqLBmvbrPXVWpd3n/J6Xxuqb6hSHNfHo/73r0/ZGFfwTKFYohbh5JKvX2qfv8VeWKrcm16PujC/8I1LnrcHLzNGem9eHaJU08uafZL+MZL/suX+5QZds+rTtxRrlCUaWePnXuPKTR6g1J8fdHF/4boL1/T3L+cP2yRqsjy+bmkaTZL+MarY7o480rybX05uj7owsfQNumrcl54vHdDJcsbvzRneTc1vvfz3Pw/dGFDyBXKCbn5fTJuVB628LfAL/6m+Xmd/ujCx8AsBQEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGsEAGvhA0i/tzZf7shwyeLS2+Ymvybn6PujCx/A5KtnybmyfX+GSxbXseNgcm68e5Gco++PLnwAn59Wk/O646fVNTCofLmS4aL58uWKugYGtfbYqeRaenP0/dGFf1N8rtiqjRdvq9Sz/F80LUmNN8/19uwhNaenJMXfH134b4Dm9JTqw0NqvK5lPeWPGm9qqg+fnHfzRN8fXfhvgB9yhaI6dx9VZdtetXZvVkvbqqwnSZLmJr9pqv5SE0/ua+zBzXk/etOi749qxQQA/I3wj0DAUhAArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArBEArP0PlE/1UDDeACkAAAAASUVORK5CYII="
                    width="90px"
                    height="90px"
                />
            </div>
        </div >
    );
};

export default Loading;
