import React, { Component } from 'react'
import { View, Image, ScrollView } from 'react-native'
import { Container, Text, Icon, List, ListItem, Left, Body, Card, CardItem, Button } from 'native-base'
import Swiper from 'react-native-swiper'
import { Row, Column as Col } from 'react-native-flexbox-grid'

import BlHeader from '../../components/BlHeader'
import Star from '../../components/Star'

import { connect } from 'react-redux'

import { saveCart, saveTitleHeader } from '../actions'

class ProductDetail extends Component {

  handleBuy(product) {
    this.props.dispatch(saveCart(product))
    this.props.navigation.navigate('CartList')
  }

  render() {
    return(
      <Container>
        <ScrollView>
          <BlHeader navigation={this.props.navigation} title={this.props.products.productdetail.name}/>

          <View style={{paddingBottom: 120}}>
          <View style={{backgroundColor: '#FFF'}}>
              <View style={{height: 400}}>
              <Swiper style={{backgroundColor: '#F1F1F1'}}>
                {this.props.products.productdetail.images.map((image, i)=> (
                  <View key={i} style={{flex: 1, justifyContent: 'flex-start'}}>
                    <Image
                      source={{uri: image}}
                      resizeMode="contain"
                      style={{height: 400}}
                    />
                  </View>
                ))}
              </Swiper>
            </View>
            <View style={{padding: 20}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View>
                  <Text>{this.props.products.productdetail.name}</Text>
                  <Star value={this.props.products.productdetail.rating.average_rate} reviewers={this.props.products.productdetail.rating.user_count} />
                </View>
                <View>
                  <Icon name="md-more"/>
                </View>
              </View>
              <Text style={{marginTop: 10, color: '#D71149'}}>Rp{this.props.products.productdetail.price}</Text>
            </View>
            <View style={{backgroundColor: '#F1F1F1', padding: 20}}>
              <Row size={12}>
                <Col sm={3}>
                  <View style={{borderRightWidth: 1, borderRightColor: '#A1A1A1'}}>
                    <Text style={{color: '#888888', textAlign: 'center', fontSize: 12}}>STOK</Text>
                    <Text style={{color: '#555555', fontWeight: 'bold', textAlign: 'center', fontSize: 12}}>>{this.props.products.productdetail.stock}</Text>
                  </View>
                </Col>
                <Col sm={3}>
                  <View style={{borderRightWidth: 1, borderRightColor: '#A1A1A1'}}>
                    <Text style={{color: '#888888', textAlign: 'center', fontSize: 12}}>TERJUAL</Text>
                    <Text style={{color: '#555555', fontWeight: 'bold', textAlign: 'center', fontSize: 12}}>{this.props.products.productdetail.sold_count}</Text>
                  </View>
                </Col>
                <Col sm={3}>
                  <View style={{borderRightWidth: 1, borderRightColor: '#A1A1A1'}}>
                    <Text style={{color: '#888888', textAlign: 'center', fontSize: 12}}>PEMINAT</Text>
                    <Text style={{color: '#555555', fontWeight: 'bold', textAlign: 'center', fontSize: 12}}>{this.props.products.productdetail.interest_count}</Text>
                  </View>
                </Col>
                <Col sm={3}>
                  <View>
                    <Text style={{color: '#888888', textAlign: 'center', fontSize: 12}}>DILIHAT</Text>
                    <Text style={{color: '#555555', fontWeight: 'bold', textAlign: 'center', fontSize: 12}}>{this.props.products.productdetail.view_count}</Text>
                  </View>
                </Col>
              </Row>
            </View>
            <View style={{flexDirection: 'row', padding: 20}}>
              <View>
                <Image
                  source={{uri: this.props.products.productdetail.seller_avatar}}
                  style={{width: 60, height: 60}}
                />
              </View>
              <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 12, fontWeight: 'bold', color: '#D71149'}}>{this.props.products.productdetail.seller_name}</Text>
                <Text style={{fontSize: 12, color: '#666666'}}>{this.props.products.productdetail.seller_level}</Text>
                <Text style={{fontSize: 12, color: '#D71149'}}>{this.props.products.productdetail.seller_positive_feedback} feedback positif</Text>
                <Text style={{fontSize: 12, color: '#888888'}}><Icon name="map" style={{fontSize: 12, marginRight: 3}}/> {this.props.products.productdetail.city}</Text>
                <Text style={{fontSize: 12, color: '#888888'}}><Icon name="ios-time-outline" style={{fontSize: 12, marginRight: 3}}/> Waktu kirim pesanan +- {this.props.products.productdetail.seller_delivery_time}</Text>
              </View>
            </View>
            <View style={{backgroundColor: '#F1F1F1', padding: 20}}>
              <Text style={{textAlign: 'center', fontSize: 12}}>Pesan sebelum 17:00 agar barang dikirim hari ini</Text>
            </View>
            <View style={{padding: 20, borderBottomWidth: 1, borderColor: '#DDD'}}>
              <Text>Cek Ongkos Kirim</Text>
            </View>
            <View style={{padding: 20, borderBottomWidth: 1, borderColor: '#DDD'}}>
              <Text>Spesifikasi</Text>
              <List style={{marginTop: 5}}>
                <ListItem noBorder style={{marginLeft: 0, paddingTop: 5, paddingBottom: 5}}>
                  <Left>
                    <Text style={{fontSize: 14, color: '#888888'}}>Kategori</Text>
                  </Left>
                  <Body>
                    <Text style={{fontSize: 14, color: '#D71149'}}>{this.props.products.productdetail.category}</Text>
                  </Body>
                </ListItem>
                <ListItem noBorder style={{marginLeft: 0, paddingTop: 5, paddingBottom: 5}}>
                  <Left>
                    <Text style={{fontSize: 14, color: '#888888'}}>Kondisi</Text>
                  </Left>
                  <Body>
                    { this.props.products.productdetail.condition === "new"
                    ? <Text style={{fontSize: 14, color: '#8BC34A'}}>Baru</Text>
                    : <Text style={{fontSize: 14, color: '#8BC34A'}}>Lama</Text> }
                  </Body>
                </ListItem>
                <ListItem noBorder style={{marginLeft: 0, paddingTop: 5, paddingBottom: 5}}>
                  <Left>
                    <Text style={{fontSize: 14, color: '#888888'}}>Berat</Text>
                  </Left>
                  <Body>
                    <Text style={{fontSize: 14}}>{this.props.products.productdetail.weight} gram</Text>
                  </Body>
                </ListItem>
              </List>
            </View>
            <View style={{padding: 20, borderBottomWidth: 1, borderColor: '#DDD'}}>
              <Text>Deskripsi</Text>
              <Text style={{marginTop: 10, fontSize: 14, color: '#888888'}}>
                {this.props.products.productdetail.desc}
              </Text>
            </View>
            <View style={{borderBottomWidth: 1, borderColor: '#DDD'}}>
              <View style={{padding: 20, paddingBottom: 5, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15}}>
                <Text style={{}}>Ulasan Barang</Text>
                <Text style={{paddingVertical: 5, paddingHorizontal: 8, fontSize: 10, borderRadius: 3, borderWidth: 1, borderColor: '#DDDDDD', color: '#D71149'}}>SELENGKAPNYA</Text>
              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginBottom: 20}}>
                <Row size={12} style={{width: 1000, marginLeft: 20}}>
                  <Col sm={2}>
                    <Card style={{marginRight: 10}}>
                      <CardItem>
                        <Body>
                          <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon name="thumbs-up" style={{color: '#8BC34A'}}/>
                            <View style={{marginLeft: 15}}>
                            <Text style={{fontSize: 12, color: '#D71149'}}>Edwin Nugraha</Text>
                            <Text numberOfLines={2} style={{fontSize: 12, color: '#888'}}>Lama Sampai. Barang Tidak </Text>
                            </View>
                          </View>
                        </Body>
                      </CardItem>
                    </Card>
                  </Col>
                  <Col sm={2}>
                    <Card style={{marginRight: 10}}>
                      <CardItem>
                        <Body>
                          <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon name="thumbs-up" style={{color: '#8BC34A'}}/>
                            <View style={{marginLeft: 15}}>
                            <Text style={{fontSize: 12, color: '#D71149'}}>Edwin Nugraha</Text>
                            <Text numberOfLines={2} style={{fontSize: 12, color: '#888'}}>Lama Sampai. Barang Tidak </Text>
                            </View>
                          </View>
                        </Body>
                      </CardItem>
                    </Card>
                  </Col>
                  <Col sm={2}>
                    <Card style={{marginRight: 10}}>
                      <CardItem>
                        <Body>
                          <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon name="thumbs-up" style={{color: '#8BC34A'}}/>
                            <View style={{marginLeft: 15}}>
                            <Text style={{fontSize: 12, color: '#D71149'}}>Edwin Nugraha</Text>
                            <Text numberOfLines={2} style={{fontSize: 12, color: '#888'}}>Lama Sampai. Barang Tidak </Text>
                            </View>
                          </View>
                        </Body>
                      </CardItem>
                    </Card>
                  </Col>
                  <Col sm={2}>
                    <Card style={{marginRight: 10}}>
                      <CardItem>
                        <Body>
                          <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon name="thumbs-up" style={{color: '#8BC34A'}}/>
                            <View style={{marginLeft: 15}}>
                            <Text style={{fontSize: 12, color: '#D71149'}}>Edwin Nugraha</Text>
                            <Text numberOfLines={2} style={{fontSize: 12, color: '#888'}}>Lama Sampai. Barang Tidak </Text>
                            </View>
                          </View>
                        </Body>
                      </CardItem>
                    </Card>
                  </Col>
                  <Col sm={2}>
                    <Card style={{marginRight: 10}}>
                      <CardItem>
                        <Body>
                          <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon name="thumbs-up" style={{color: '#8BC34A'}}/>
                            <View style={{marginLeft: 15}}>
                            <Text style={{fontSize: 12, color: '#D71149'}}>Edwin Nugraha</Text>
                            <Text numberOfLines={2} style={{fontSize: 12, color: '#888'}}>Lama Sampai. Barang Tidak </Text>
                            </View>
                          </View>
                        </Body>
                      </CardItem>
                    </Card>
                  </Col>
                  <Col sm={2}>
                    <Card style={{marginRight: 10}}>
                      <CardItem>
                        <Body>
                          <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon name="thumbs-up" style={{color: '#8BC34A'}}/>
                            <View style={{marginLeft: 15}}>
                            <Text style={{fontSize: 12, color: '#D71149'}}>Edwin Nugraha</Text>
                            <Text numberOfLines={2} style={{fontSize: 12, color: '#888'}}>Lama Sampai. Barang Tidak </Text>
                            </View>
                          </View>
                        </Body>
                      </CardItem>
                    </Card>
                  </Col>
                </Row>
              </ScrollView>
            </View>
            <View style={{padding: 20, borderBottomWidth: 1, borderColor: '#DDD'}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15}}>
                <Text style={{}}>Ulasan Barang</Text>
                <Text style={{paddingVertical: 5, paddingHorizontal: 8, fontSize: 10, borderRadius: 3, borderWidth: 1, borderColor: '#DDDDDD', color: '#D71149'}}>SELENGKAPNYA</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginBottom: 5}}>
                <Icon name="ios-star" style={{fontSize: 10, color: '#f9b700', marginRight: 3}}/>
                <Icon name="ios-star" style={{fontSize: 10, color: '#f9b700', marginRight: 3}}/>
                <Icon name="ios-star" style={{fontSize: 10, color: '#f9b700', marginRight: 3}}/>
                <Icon name="ios-star" style={{fontSize: 10, color: '#f9b700', marginRight: 3}}/>
              </View>
              <Text style={{fontSize: 12, color: '#888', marginBottom: 10}}>oleh WIRADIKAL, Senin, 9 Apr 2018 17:22 WIB</Text>
              <Text style={{fontSize: 14, fontWeight: 'bold', marginBottom: 3}}>Bagus</Text>
              <Text style={{fontSize: 14}}>Bagus dan lumayan murah. Hanya packing paketnya aja kurang aman. (Hanya buble wrap).
              Alhasil 2 dari 6 isinya patah. Semoga packingnya lebih bagus lagi. Terima kasih</Text>
            </View>
          </View>
        </View>
        </ScrollView>
        <View style={{position: 'absolute', backgroundColor: '#FFF', bottom: 0, left: 0, padding: 10}}>
          <Row size={12}>
            <Col sm={6}>
              <Text full style={{paddingVertical: 12, fontWeight: 'bold', backgroundColor: '#F1F1F1', borderWidth: 1, borderColor: '#DDD', fontSize: 14, color: '#000', borderRadius: 3, textAlign: 'center', marginRight: 5}}>Kirim Pesan</Text>
            </Col>
            <Col sm={6}>
              <Text full style={{paddingVertical: 13, fontWeight: 'bold', backgroundColor: '#D71149', fontSize: 14, color: '#FFF', borderRadius: 3, textAlign: 'center', marginLeft: 5}} onPress={() => this.handleBuy(this.props.products.productdetail)}>Beli</Text>
            </Col>
            <Col sm={12}>
              <Text full style={{paddingVertical: 12, fontWeight: 'bold', backgroundColor: '#f9b700', fontSize: 14, color: '#000', borderRadius: 3, textAlign: 'center', marginTop: 10}}>Nego Harga</Text>
            </Col>
          </Row>
        </View>
      </Container>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    products: state.productsReducer
  }
}

export default connect(mapStateToProps)(ProductDetail);
