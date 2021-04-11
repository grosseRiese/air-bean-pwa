<template>
  <section class="section-profile">
      <img src="../assets/img/graphics-header.svg" alt="" class="top-img-profile">

      <button class="btn-menu-profile" @click="$router.push('/Nav')">
        <img src="../assets/img/navicon.svg" /> 
      </button>
      <article class="order-history">

				<section class="profile-img">	</section>
					<img src="../assets/img/abstract-user-flat-4.svg" alt=""  class="prof-img-user">
						<h2>Sixten Kaffelövér</h2>
						<p>sixten.kaffelover@zocom.se</p>

					<table class="content-tbl-profile">
						<caption>Monthly savings</caption>
						<thead >
							<tr>
								<th style="width:50%"></th>
								<th style="width:35%;"></th>
								<th style="width:15%"></th>
							</tr>
						</thead>
						<tbody class ="tbody-profile">
							<tr class="tbl-row" >
								<td class="tbl-data-order-num">
										#Ab23498945858 
										<br>
										<small class="total-summa-single-order"> &emsp;
												total ordersumma
										</small>
								</td>
								<td></td>
								<td class="tbl-data-date-price">
										20/03/16
										<br>
										<small class="total-summa-single-order">
												443 &emsp;<i>kr</i>
										</small> 
								</td>
							</tr>

						</tbody>
							<tfoot>
								<tr>
									<td>Totalt spenderat </td>
									<td></td>
									<td>1669 kr</td>
								</tr>
							</tfoot>
					</table>
      </article>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&family=Work+Sans:wght@400;600&display=swap');

.section-profile{
    display: grid;
    grid-template-columns:  auto;
    grid-template-rows: auto;
    grid-template-areas:"header-profile"
                        "content-profile"
                        "content-profile"
                        "content-profile";
    align-content: center;
    margin: auto;                    
    background-color:var(--brown);
    min-height:95vh;
    width: 36%;
    max-width: 36%;
    min-width: 100%;
    height: auto; 
		margin-bottom: 1rem;
    .top-img-profile{
      grid-area: header-profile;
      width:100%;
      position: relative;
    }
    .btn-menu-profile{
      position: absolute;
      margin-top: 1rem;
      margin-left: 1rem;
      border: none;
      text-decoration: none;
      display: inline-block;
      font-size: 1.6vw;
      cursor: pointer;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background-color: white;
    }
    .order-history{
			grid-area: content-profile;
			height:98vh;
			justify-content:center;
			justify-items: center;
			justify-self:center;
			align-items: center;
			width:100%;

				img.prof-img-user{
					width: auto;
					height: 94px;
					text-align: center;
					margin: auto;
					display: flex;
				}
					h2{
					font-family: PT Serif;
					font-style: normal;
					font-weight: bold;
					font-size: 24px;
					line-height: 120%;
					text-align: center;
					color:var(--white);
				}
				p{
					font-family: Work Sans;
					font-size: 14px;
					line-height: 120%;
					text-align: center;
					color: var(--gray-rgba);
				}
				table.content-tbl-profile{
					color:var(--white);
					margin:0 1rem;

					caption{
						//float:left;
						width: 279px;
						height: 31px;
						left: 30px;
						top: 357px;

						font-family: PT Serif;
						font-style: normal;
						font-weight: bold;
						font-size: 22px;
						line-height: 120%;
						display: flex;
						//align-items: center;
						color: var(--white);
						padding-bottom: 1rem;
					}
					tbody.tbody-profile{
						tr.tbl-row td{
							width: 315px;
							height: 0px;
							left: 30px;
							top: 447px;
							border-bottom: 1px solid	var(--gray-rgba2);
							padding-bottom: 1rem;
						}
						.tbl-data-order-num,.tbl-data-date-price{
							width: 156px;
							height: 20px;
							left: 30px;
							top: 403px;
							font-family: Work Sans;
							font-style: normal;
							font-weight: bold;
							font-size: 14px;
							line-height: 120%;
							color: var(--gray-rgba3);
							.total-summa-single-order{
								width: 156px;
								height: 20px;
								left: 30px;
								top: 422px;

								font-family: Work Sans;
								font-style: normal;
								font-weight: normal;
								font-size: 12px;
								line-height: 120%;
								color:var(--gray-rgba4);

							}
						}
					
					}
					tfoot tr td{
						width: 156px;
						height: 20px;
						left: 30px;
						top: 559px;
						font-family: Work Sans;
						font-style: normal;
						font-weight: bold;
						font-size: 14px;
						line-height: 120%;
						color: var(--gray-rgba);
						border-top:3px solid var(--gray-rgba);
					}
				}
    }
}

</style>